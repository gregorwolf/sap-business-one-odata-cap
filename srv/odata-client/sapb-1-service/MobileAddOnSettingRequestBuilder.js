"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileAddOnSettingRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var MobileAddOnSetting_1 = require("./MobileAddOnSetting");
/**
 * Request builder class for operations supported on the [[MobileAddOnSetting]] entity.
 */
var MobileAddOnSettingRequestBuilder = /** @class */ (function (_super) {
    __extends(MobileAddOnSettingRequestBuilder, _super);
    function MobileAddOnSettingRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `MobileAddOnSetting` entity based on its keys.
     * @param code Key property. See [[MobileAddOnSetting.code]].
     * @returns A request builder for creating requests to retrieve one `MobileAddOnSetting` entity based on its keys.
     */
    MobileAddOnSettingRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(MobileAddOnSetting_1.MobileAddOnSetting, { Code: code });
    };
    /**
     * Returns a request builder for querying all `MobileAddOnSetting` entities.
     * @returns A request builder for creating requests to retrieve all `MobileAddOnSetting` entities.
     */
    MobileAddOnSettingRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(MobileAddOnSetting_1.MobileAddOnSetting);
    };
    /**
     * Returns a request builder for creating a `MobileAddOnSetting` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MobileAddOnSetting`.
     */
    MobileAddOnSettingRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(MobileAddOnSetting_1.MobileAddOnSetting, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `MobileAddOnSetting`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MobileAddOnSetting`.
     */
    MobileAddOnSettingRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(MobileAddOnSetting_1.MobileAddOnSetting, entity);
    };
    MobileAddOnSettingRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(MobileAddOnSetting_1.MobileAddOnSetting, codeOrEntity instanceof MobileAddOnSetting_1.MobileAddOnSetting ? codeOrEntity : { Code: codeOrEntity });
    };
    return MobileAddOnSettingRequestBuilder;
}(v4_1.RequestBuilder));
exports.MobileAddOnSettingRequestBuilder = MobileAddOnSettingRequestBuilder;
//# sourceMappingURL=MobileAddOnSettingRequestBuilder.js.map