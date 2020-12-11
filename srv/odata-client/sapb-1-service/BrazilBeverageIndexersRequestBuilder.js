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
exports.BrazilBeverageIndexersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BrazilBeverageIndexers_1 = require("./BrazilBeverageIndexers");
/**
 * Request builder class for operations supported on the [[BrazilBeverageIndexers]] entity.
 */
var BrazilBeverageIndexersRequestBuilder = /** @class */ (function (_super) {
    __extends(BrazilBeverageIndexersRequestBuilder, _super);
    function BrazilBeverageIndexersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BrazilBeverageIndexers` entity based on its keys.
     * @param beverageId Key property. See [[BrazilBeverageIndexers.beverageId]].
     * @returns A request builder for creating requests to retrieve one `BrazilBeverageIndexers` entity based on its keys.
     */
    BrazilBeverageIndexersRequestBuilder.prototype.getByKey = function (beverageId) {
        return new core_1.GetByKeyRequestBuilderV4(BrazilBeverageIndexers_1.BrazilBeverageIndexers, { BeverageID: beverageId });
    };
    /**
     * Returns a request builder for querying all `BrazilBeverageIndexers` entities.
     * @returns A request builder for creating requests to retrieve all `BrazilBeverageIndexers` entities.
     */
    BrazilBeverageIndexersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BrazilBeverageIndexers_1.BrazilBeverageIndexers);
    };
    /**
     * Returns a request builder for creating a `BrazilBeverageIndexers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BrazilBeverageIndexers`.
     */
    BrazilBeverageIndexersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BrazilBeverageIndexers_1.BrazilBeverageIndexers, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BrazilBeverageIndexers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BrazilBeverageIndexers`.
     */
    BrazilBeverageIndexersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BrazilBeverageIndexers_1.BrazilBeverageIndexers, entity);
    };
    BrazilBeverageIndexersRequestBuilder.prototype.delete = function (beverageIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BrazilBeverageIndexers_1.BrazilBeverageIndexers, beverageIdOrEntity instanceof BrazilBeverageIndexers_1.BrazilBeverageIndexers ? beverageIdOrEntity : { BeverageID: beverageIdOrEntity });
    };
    return BrazilBeverageIndexersRequestBuilder;
}(core_1.RequestBuilder));
exports.BrazilBeverageIndexersRequestBuilder = BrazilBeverageIndexersRequestBuilder;
//# sourceMappingURL=BrazilBeverageIndexersRequestBuilder.js.map