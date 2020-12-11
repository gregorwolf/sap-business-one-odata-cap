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
exports.ManufacturersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Manufacturers_1 = require("./Manufacturers");
/**
 * Request builder class for operations supported on the [[Manufacturers]] entity.
 */
var ManufacturersRequestBuilder = /** @class */ (function (_super) {
    __extends(ManufacturersRequestBuilder, _super);
    function ManufacturersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Manufacturers` entity based on its keys.
     * @param code Key property. See [[Manufacturers.code]].
     * @returns A request builder for creating requests to retrieve one `Manufacturers` entity based on its keys.
     */
    ManufacturersRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(Manufacturers_1.Manufacturers, { Code: code });
    };
    /**
     * Returns a request builder for querying all `Manufacturers` entities.
     * @returns A request builder for creating requests to retrieve all `Manufacturers` entities.
     */
    ManufacturersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Manufacturers_1.Manufacturers);
    };
    /**
     * Returns a request builder for creating a `Manufacturers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Manufacturers`.
     */
    ManufacturersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Manufacturers_1.Manufacturers, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Manufacturers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Manufacturers`.
     */
    ManufacturersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Manufacturers_1.Manufacturers, entity);
    };
    ManufacturersRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Manufacturers_1.Manufacturers, codeOrEntity instanceof Manufacturers_1.Manufacturers ? codeOrEntity : { Code: codeOrEntity });
    };
    return ManufacturersRequestBuilder;
}(core_1.RequestBuilder));
exports.ManufacturersRequestBuilder = ManufacturersRequestBuilder;
//# sourceMappingURL=ManufacturersRequestBuilder.js.map