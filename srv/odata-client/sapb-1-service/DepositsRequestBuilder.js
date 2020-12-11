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
exports.DepositsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Deposits_1 = require("./Deposits");
/**
 * Request builder class for operations supported on the [[Deposits]] entity.
 */
var DepositsRequestBuilder = /** @class */ (function (_super) {
    __extends(DepositsRequestBuilder, _super);
    function DepositsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Deposits` entity based on its keys.
     * @param absEntry Key property. See [[Deposits.absEntry]].
     * @returns A request builder for creating requests to retrieve one `Deposits` entity based on its keys.
     */
    DepositsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(Deposits_1.Deposits, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `Deposits` entities.
     * @returns A request builder for creating requests to retrieve all `Deposits` entities.
     */
    DepositsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Deposits_1.Deposits);
    };
    /**
     * Returns a request builder for creating a `Deposits` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Deposits`.
     */
    DepositsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Deposits_1.Deposits, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Deposits`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Deposits`.
     */
    DepositsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Deposits_1.Deposits, entity);
    };
    DepositsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Deposits_1.Deposits, absEntryOrEntity instanceof Deposits_1.Deposits ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return DepositsRequestBuilder;
}(core_1.RequestBuilder));
exports.DepositsRequestBuilder = DepositsRequestBuilder;
//# sourceMappingURL=DepositsRequestBuilder.js.map