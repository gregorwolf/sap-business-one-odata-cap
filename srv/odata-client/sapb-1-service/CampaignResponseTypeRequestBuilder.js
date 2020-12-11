"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignResponseTypeRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CampaignResponseType_1 = require("./CampaignResponseType");
/**
 * Request builder class for operations supported on the [[CampaignResponseType]] entity.
 */
var CampaignResponseTypeRequestBuilder = /** @class */ (function (_super) {
    __extends(CampaignResponseTypeRequestBuilder, _super);
    function CampaignResponseTypeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CampaignResponseType` entity based on its keys.
     * @param responseType Key property. See [[CampaignResponseType.responseType]].
     * @returns A request builder for creating requests to retrieve one `CampaignResponseType` entity based on its keys.
     */
    CampaignResponseTypeRequestBuilder.prototype.getByKey = function (responseType) {
        return new core_1.GetByKeyRequestBuilderV4(CampaignResponseType_1.CampaignResponseType, { ResponseType: responseType });
    };
    /**
     * Returns a request builder for querying all `CampaignResponseType` entities.
     * @returns A request builder for creating requests to retrieve all `CampaignResponseType` entities.
     */
    CampaignResponseTypeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(CampaignResponseType_1.CampaignResponseType);
    };
    /**
     * Returns a request builder for creating a `CampaignResponseType` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CampaignResponseType`.
     */
    CampaignResponseTypeRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(CampaignResponseType_1.CampaignResponseType, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CampaignResponseType`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CampaignResponseType`.
     */
    CampaignResponseTypeRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(CampaignResponseType_1.CampaignResponseType, entity);
    };
    CampaignResponseTypeRequestBuilder.prototype.delete = function (responseTypeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(CampaignResponseType_1.CampaignResponseType, responseTypeOrEntity instanceof CampaignResponseType_1.CampaignResponseType ? responseTypeOrEntity : { ResponseType: responseTypeOrEntity });
    };
    return CampaignResponseTypeRequestBuilder;
}(core_1.RequestBuilder));
exports.CampaignResponseTypeRequestBuilder = CampaignResponseTypeRequestBuilder;
//# sourceMappingURL=CampaignResponseTypeRequestBuilder.js.map