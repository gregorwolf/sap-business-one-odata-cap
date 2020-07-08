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
exports.CampaignsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Campaigns_1 = require("./Campaigns");
/**
 * Request builder class for operations supported on the [[Campaigns]] entity.
 */
var CampaignsRequestBuilder = /** @class */ (function (_super) {
    __extends(CampaignsRequestBuilder, _super);
    function CampaignsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Campaigns` entity based on its keys.
     * @param campaignNumber Key property. See [[Campaigns.campaignNumber]].
     * @returns A request builder for creating requests to retrieve one `Campaigns` entity based on its keys.
     */
    CampaignsRequestBuilder.prototype.getByKey = function (campaignNumber) {
        return new v4_1.GetByKeyRequestBuilder(Campaigns_1.Campaigns, { CampaignNumber: campaignNumber });
    };
    /**
     * Returns a request builder for querying all `Campaigns` entities.
     * @returns A request builder for creating requests to retrieve all `Campaigns` entities.
     */
    CampaignsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Campaigns_1.Campaigns);
    };
    /**
     * Returns a request builder for creating a `Campaigns` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Campaigns`.
     */
    CampaignsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Campaigns_1.Campaigns, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Campaigns`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Campaigns`.
     */
    CampaignsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Campaigns_1.Campaigns, entity);
    };
    CampaignsRequestBuilder.prototype.delete = function (campaignNumberOrEntity) {
        return new v4_1.DeleteRequestBuilder(Campaigns_1.Campaigns, campaignNumberOrEntity instanceof Campaigns_1.Campaigns ? campaignNumberOrEntity : { CampaignNumber: campaignNumberOrEntity });
    };
    return CampaignsRequestBuilder;
}(v4_1.RequestBuilder));
exports.CampaignsRequestBuilder = CampaignsRequestBuilder;
//# sourceMappingURL=CampaignsRequestBuilder.js.map