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
exports.TaxWebSitesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TaxWebSites_1 = require("./TaxWebSites");
/**
 * Request builder class for operations supported on the [[TaxWebSites]] entity.
 */
var TaxWebSitesRequestBuilder = /** @class */ (function (_super) {
    __extends(TaxWebSitesRequestBuilder, _super);
    function TaxWebSitesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TaxWebSites` entity based on its keys.
     * @param absEntry Key property. See [[TaxWebSites.absEntry]].
     * @returns A request builder for creating requests to retrieve one `TaxWebSites` entity based on its keys.
     */
    TaxWebSitesRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(TaxWebSites_1.TaxWebSites, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `TaxWebSites` entities.
     * @returns A request builder for creating requests to retrieve all `TaxWebSites` entities.
     */
    TaxWebSitesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(TaxWebSites_1.TaxWebSites);
    };
    /**
     * Returns a request builder for creating a `TaxWebSites` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TaxWebSites`.
     */
    TaxWebSitesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(TaxWebSites_1.TaxWebSites, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TaxWebSites`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TaxWebSites`.
     */
    TaxWebSitesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(TaxWebSites_1.TaxWebSites, entity);
    };
    TaxWebSitesRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(TaxWebSites_1.TaxWebSites, absEntryOrEntity instanceof TaxWebSites_1.TaxWebSites ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return TaxWebSitesRequestBuilder;
}(core_1.RequestBuilder));
exports.TaxWebSitesRequestBuilder = TaxWebSitesRequestBuilder;
//# sourceMappingURL=TaxWebSitesRequestBuilder.js.map