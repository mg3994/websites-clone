import os
from playwright.sync_api import sync_playwright

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        viewports = [
            ("mobile", 375, 812),
            ("tablet", 768, 1024),
            ("desktop", 1440, 900)
        ]

        for name, width, height in viewports:
            context = browser.new_context(
                viewport={"width": width, "height": height},
                record_video_dir="/home/jules/verification/videos"
            )
            page = context.new_page()
            page.goto("http://localhost:8080/index.html")
            page.wait_for_timeout(1000)

            screenshot_path = f"/home/jules/verification/screenshots/{name}_{width}.png"
            page.screenshot(path=screenshot_path, full_page=False)
            context.close()
            print(f"Captured {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    run_verification()
