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
exports.CampaignResponseTypeRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
        return new v4_1.GetByKeyRequestBuilder(CampaignResponseType_1.CampaignResponseType, { ResponseType: responseType });
    };
    /**
     * Returns a request builder for querying all `CampaignResponseType` entities.
     * @returns A request builder for creating requests to retrieve all `CampaignResponseType` entities.
     */
    CampaignResponseTypeRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(CampaignResponseType_1.CampaignResponseType);
    };
    /**
     * Returns a request builder for creating a `CampaignResponseType` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CampaignResponseType`.
     */
    CampaignResponseTypeRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(CampaignResponseType_1.CampaignResponseType, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CampaignResponseType`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CampaignResponseType`.
     */
    CampaignResponseTypeRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(CampaignResponseType_1.CampaignResponseType, entity);
    };
    CampaignResponseTypeRequestBuilder.prototype.delete = function (responseTypeOrEntity) {
        return new v4_1.DeleteRequestBuilder(CampaignResponseType_1.CampaignResponseType, responseTypeOrEntity instanceof CampaignResponseType_1.CampaignResponseType ? responseTypeOrEntity : { ResponseType: responseTypeOrEntity });
    };
    return CampaignResponseTypeRequestBuilder;
}(v4_1.RequestBuilder));
exports.CampaignResponseTypeRequestBuilder = CampaignResponseTypeRequestBuilder;
//# sourceMappingURL=CampaignResponseTypeRequestBuilder.js.map