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
exports.InventoryCyclesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var InventoryCycles_1 = require("./InventoryCycles");
/**
 * Request builder class for operations supported on the [[InventoryCycles]] entity.
 */
var InventoryCyclesRequestBuilder = /** @class */ (function (_super) {
    __extends(InventoryCyclesRequestBuilder, _super);
    function InventoryCyclesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InventoryCycles` entity based on its keys.
     * @param cycleCode Key property. See [[InventoryCycles.cycleCode]].
     * @returns A request builder for creating requests to retrieve one `InventoryCycles` entity based on its keys.
     */
    InventoryCyclesRequestBuilder.prototype.getByKey = function (cycleCode) {
        return new core_1.GetByKeyRequestBuilderV4(InventoryCycles_1.InventoryCycles, { CycleCode: cycleCode });
    };
    /**
     * Returns a request builder for querying all `InventoryCycles` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryCycles` entities.
     */
    InventoryCyclesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(InventoryCycles_1.InventoryCycles);
    };
    /**
     * Returns a request builder for creating a `InventoryCycles` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryCycles`.
     */
    InventoryCyclesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(InventoryCycles_1.InventoryCycles, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InventoryCycles`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryCycles`.
     */
    InventoryCyclesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(InventoryCycles_1.InventoryCycles, entity);
    };
    InventoryCyclesRequestBuilder.prototype.delete = function (cycleCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(InventoryCycles_1.InventoryCycles, cycleCodeOrEntity instanceof InventoryCycles_1.InventoryCycles ? cycleCodeOrEntity : { CycleCode: cycleCodeOrEntity });
    };
    return InventoryCyclesRequestBuilder;
}(core_1.RequestBuilder));
exports.InventoryCyclesRequestBuilder = InventoryCyclesRequestBuilder;
//# sourceMappingURL=InventoryCyclesRequestBuilder.js.map