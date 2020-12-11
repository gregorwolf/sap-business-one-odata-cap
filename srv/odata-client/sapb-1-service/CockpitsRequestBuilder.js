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
exports.CockpitsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Cockpits_1 = require("./Cockpits");
/**
 * Request builder class for operations supported on the [[Cockpits]] entity.
 */
var CockpitsRequestBuilder = /** @class */ (function (_super) {
    __extends(CockpitsRequestBuilder, _super);
    function CockpitsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Cockpits` entity based on its keys.
     * @param absEntry Key property. See [[Cockpits.absEntry]].
     * @returns A request builder for creating requests to retrieve one `Cockpits` entity based on its keys.
     */
    CockpitsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(Cockpits_1.Cockpits, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `Cockpits` entities.
     * @returns A request builder for creating requests to retrieve all `Cockpits` entities.
     */
    CockpitsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Cockpits_1.Cockpits);
    };
    /**
     * Returns a request builder for creating a `Cockpits` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Cockpits`.
     */
    CockpitsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Cockpits_1.Cockpits, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Cockpits`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Cockpits`.
     */
    CockpitsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Cockpits_1.Cockpits, entity);
    };
    CockpitsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Cockpits_1.Cockpits, absEntryOrEntity instanceof Cockpits_1.Cockpits ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return CockpitsRequestBuilder;
}(core_1.RequestBuilder));
exports.CockpitsRequestBuilder = CockpitsRequestBuilder;
//# sourceMappingURL=CockpitsRequestBuilder.js.map