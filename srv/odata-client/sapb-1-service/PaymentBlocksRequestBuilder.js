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
exports.PaymentBlocksRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PaymentBlocks_1 = require("./PaymentBlocks");
/**
 * Request builder class for operations supported on the [[PaymentBlocks]] entity.
 */
var PaymentBlocksRequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentBlocksRequestBuilder, _super);
    function PaymentBlocksRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentBlocks` entity based on its keys.
     * @param absEntry Key property. See [[PaymentBlocks.absEntry]].
     * @returns A request builder for creating requests to retrieve one `PaymentBlocks` entity based on its keys.
     */
    PaymentBlocksRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(PaymentBlocks_1.PaymentBlocks, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `PaymentBlocks` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentBlocks` entities.
     */
    PaymentBlocksRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PaymentBlocks_1.PaymentBlocks);
    };
    /**
     * Returns a request builder for creating a `PaymentBlocks` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentBlocks`.
     */
    PaymentBlocksRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PaymentBlocks_1.PaymentBlocks, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentBlocks`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentBlocks`.
     */
    PaymentBlocksRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PaymentBlocks_1.PaymentBlocks, entity);
    };
    PaymentBlocksRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(PaymentBlocks_1.PaymentBlocks, absEntryOrEntity instanceof PaymentBlocks_1.PaymentBlocks ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return PaymentBlocksRequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentBlocksRequestBuilder = PaymentBlocksRequestBuilder;
//# sourceMappingURL=PaymentBlocksRequestBuilder.js.map