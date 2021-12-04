//
//  mac_os_rn_appsNative.swift
//  mac_os_rn_apps-macOS
//
//  Created by Владимир on 03.12.2021.
//

import Foundation
import KeychainAccess

private let keychain = Keychain(service: "mac_os_rn_apps")

@objc(BuildingAppsNative)
class BuildingAppsNative: NSObject {
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc
  func keychainWrite(_ key: NSString, payload: NSString, resolver: RCTPromiseResolveBlock, rejecter: RCTPromiseRejectBlock) {
    keychain[key as String] = payload as String
    resolver(true)
  }

  @objc
  func keychainRead(_ key: NSString, resolver resolve: RCTPromiseResolveBlock, rejecter: RCTPromiseRejectBlock) {
    let value = keychain[key as String]
    return resolve(value)
  }
  
  @objc
  func closeApp() {
    DispatchQueue.main.async {
      let appDelegate = NSApp.delegate as? AppDelegate
      appDelegate?.closeApp()
    }
  }
}

