//
//  mac_os_rn_appsNative.m
//  mac_os_rn_apps-macOS
//
//  Created by Владимир on 03.12.2021.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(BuildingAppsNative, NSObject)

RCT_EXTERN_METHOD(keychainWrite: (NSString)key payload:(NSString) payload resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(keychainRead: (NSString)key resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end
