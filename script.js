document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Download Button Scroll Trigger
    const heroBtn = document.getElementById('heroDownloadBtn');
    const stickyWrapper = document.getElementById('stickyBtnWrapper');

    if (heroBtn && stickyWrapper) {
        window.addEventListener('scroll', () => {
            const rect = heroBtn.getBoundingClientRect();
            if (rect.bottom < 0) {
                stickyWrapper.classList.add('visible');
            } else {
                stickyWrapper.classList.remove('visible');
            }
        });
    }

    // 2. Interactive FAQ Accordion Controls
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer) {
                    otherAnswer.style.maxHeight = null;
                }
            });

            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // 3. Dynamic Year binding
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 4. Interactive Niche Diagnostic Panel Logic
    const simRange = document.getElementById('simRange');
    const simRangeVal = document.getElementById('simRangeVal');
    const simAutoWood = document.getElementById('simAutoWood');
    const simESP = document.getElementById('simESP');
    
    const simFPS = document.getElementById('simFPS');
    const simLatency = document.getElementById('simLatency');
    const consoleOutput = document.getElementById('consoleOutput');

    function updateSimulator() {
        if (!simRange) return;
        const val = parseInt(simRange.value);
        
        let logsString = "";
        const simType = "berry";
        
        if (simType === "forest") {
            simRangeVal.textContent = val + " studs";
            let timberRate = val * (simAutoWood.checked ? 2.5 : 0.5);
            simFPS.textContent = Math.round(timberRate) + " Logs/Hr";
            let espRate = simESP.checked ? 99.9 : 45.2;
            simLatency.textContent = espRate + "% Precision";
            logsString = JSON.stringify({
                "AutoChopTimberRange": val,
                "AutoFeedCampfires": simAutoWood.checked,
                "LostChildrenESP": simESP.checked,
                "AntiSpamTickRate": "150ms",
                "InjectStatus": "UNC_OK"
            }, null, 2);
        } else if (simType === "dusty") {
            simRangeVal.textContent = val + " MPH";
            let usageRate = simAutoWood.checked ? 0.0 : 15.4;
            simFPS.textContent = usageRate.toFixed(1) + " Gal/Hr";
            let temp = simESP.checked ? 42 : Math.round(val * 0.85);
            simLatency.textContent = temp + "&deg;C (Stable)";
            logsString = JSON.stringify({
                "VehicleVelocityLock": val,
                "UnlimitedGasolineSupply": simAutoWood.checked,
                "RadiatorWaterTempLock": simESP.checked,
                "PartESPBoundBoxes": true,
                "InjectHook": "UNC_OK"
            }, null, 2);
        } else if (simType === "adopt") {
            simRangeVal.textContent = val + " Seconds Delay";
            let bucksRate = (12 - val) * (simESP.checked ? 600 : 300);
            simFPS.textContent = Math.round(bucksRate) + " Bucks/Hr";
            simLatency.textContent = simAutoWood.checked ? "100% Secure" : "Manual Hatch";
            logsString = JSON.stringify({
                "PetTaskAutomationDelay": val,
                "AutoEggHatchingLoop": simAutoWood.checked,
                "DoubleCareFarmingActive": simESP.checked,
                "AntiIdleKeepAlive": true,
                "TransactionVerify": "UNC_OK"
            }, null, 2);
        } else if (simType === "astd" || simType === "vanguards") {
            simRangeVal.textContent = "Wave " + val + " Placement";
            let gemRate = (26 - val) * (simAutoWood.checked ? 75 : 30);
            simFPS.textContent = Math.round(gemRate) + " Gems/Hr";
            simLatency.textContent = simESP.checked ? "72% Less Usage" : "0% Saved";
            logsString = JSON.stringify({
                "PlacementWaveThreshold": val,
                "InstantWaveSkipToggle": simAutoWood.checked,
                "DisableGraphicsAntiLag": simESP.checked,
                "AutoUpgradeLanes": true,
                "PlacerSocket": "UNC_OK"
            }, null, 2);
        } else if (simType === "adventures") {
            simRangeVal.textContent = val + "x Speed Target";
            let gemRate = val * (simESP.checked ? 450 : 250);
            simFPS.textContent = Math.round(gemRate) + " Portal Gems/Hr";
            simLatency.textContent = simAutoWood.checked ? "Unique Priority" : "Random Summons";
            logsString = JSON.stringify({
                "RaidingSpeedTargetMultiplier": val,
                "TraitAutoRollToggle": simAutoWood.checked,
                "InfiniteRoomSkipActive": simESP.checked,
                "AntiAFKMacrosEnabled": true,
                "RunnerStatus": "UNC_OK"
            }, null, 2);
        } else if (simType === "defenders") {
            simRangeVal.textContent = "Top " + (105 - val) + "% Rarity Lock";
            simFPS.textContent = simAutoWood.checked ? "100% Grid Match" : "90% Alignment";
            simLatency.textContent = simESP.checked ? "Flawless Auto" : "Manual Upgrade";
            logsString = JSON.stringify({
                "SummonTraitStopPercentile": val,
                "SmartPlacementMapScan": simAutoWood.checked,
                "AutoUpgradeDefenseGrid": simESP.checked,
                "AntiReportShields": true,
                "HookStatus": "UNC_OK"
            }, null, 2);
        } else if (simType === "arsenal") {
            simRangeVal.textContent = val + " px FOV Circle";
            simFPS.textContent = simAutoWood.checked ? "Silent Active" : "Normal Aimbot";
            simLatency.textContent = simESP.checked ? "Wall ESP On" : "ESP Off";
            logsString = JSON.stringify({
                "AimbotFieldOfView": val,
                "SilentAimBypass": simAutoWood.checked,
                "WallESPBoundBoxes": simESP.checked,
                "RecoilCompensation": "100%",
                "AimHook": "UNC_OK"
            }, null, 2);
        } else if (simType === "barry") {
            simRangeVal.textContent = val + " walkspeed limit";
            simFPS.textContent = simAutoWood.checked ? "Trap Noclip" : "Normal Collision";
            simLatency.textContent = simESP.checked ? "Barry Tracked" : "No ESP";
            logsString = JSON.stringify({
                "WalkSpeedOffset": val,
                "TrapCollisionNoclip": simAutoWood.checked,
                "BarryGuardESP": simESP.checked,
                "GravityAdjuster": "Normal",
                "StageTeleport": "UNC_OK"
            }, null, 2);
        } else if (simType === "bedwars") {
            simRangeVal.textContent = val + " studs Reach";
            simFPS.textContent = simAutoWood.checked ? "Auto Bridge On" : "Bridge Off";
            simLatency.textContent = simESP.checked ? "Void Save Active" : "No Shield";
            logsString = JSON.stringify({
                "KillAuraReachStuds": val,
                "AutoBridgePlaceBlocks": simAutoWood.checked,
                "VoidSaveFallBypass": simESP.checked,
                "GeneratorMagnet": true,
                "CombatHook": "UNC_OK"
            }, null, 2);
        } else if (simType === "berry") {
            simRangeVal.textContent = val + " Salary multiplier";
            simFPS.textContent = simAutoWood.checked ? "Car Spawner On" : "Car Spawner Off";
            simLatency.textContent = simESP.checked ? "Custom Assets Pass" : "Asset Lock";
            logsString = JSON.stringify({
                "SupermarketScanMulti": val,
                "LuxuryVehicleUnlocker": simAutoWood.checked,
                "HouseFurnitureBypass": simESP.checked,
                "CityTeleporter": true,
                "RPBypass": "UNC_OK"
            }, null, 2);
        } else if (simType === "beeswarm") {
            simRangeVal.textContent = val + " Hive Slot Count";
            simFPS.textContent = simAutoWood.checked ? "Harvester Active" : "Manual Gather";
            simLatency.textContent = simESP.checked ? "Convert Hive Ok" : "Convert Hive Off";
            logsString = JSON.stringify({
                "ActiveBeeSwarmSlotCount": val,
                "FieldPollenAutoHarvest": simAutoWood.checked,
                "HivePollenConvertTeleport": simESP.checked,
                "ViciousBeeFarmingLoop": true,
                "FarmingHook": "UNC_OK"
            }, null, 2);
        } else {
            simRangeVal.textContent = val + " ms Delay";
            simFPS.textContent = (simAutoWood.checked ? "100%" : "60%") + " Inject Speed";
            simLatency.textContent = simESP.checked ? "UNC Pass" : "Normal Mode";
            logsString = JSON.stringify({
                "ExecutionThreadDelay": val,
                "BypassSystemHook": simAutoWood.checked,
                "UncLibStandard": simESP.checked,
                "AntiCheatBypass": true
            }, null, 2);
        }

        consoleOutput.textContent = logsString;
    }

    if (simRange) {
        simRange.addEventListener('input', updateSimulator);
        simAutoWood.addEventListener('change', updateSimulator);
        if (simESP) simESP.addEventListener('change', updateSimulator);
        updateSimulator();
    }
});

// 5. Global Clipboard Copy function
window.copyCode = function(elementId, btn) {
    const codeBlock = document.getElementById(elementId);
    if (!codeBlock) return;
    
    const text = codeBlock.textContent || codeBlock.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = "Copied!";
        btn.style.background = "#ffffff";
        btn.style.color = "#000000";
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = "";
            btn.style.color = "";
        }, 2000);
    }).catch(err => {
        console.error("Clipboard copy failed: ", err);
    });
};
