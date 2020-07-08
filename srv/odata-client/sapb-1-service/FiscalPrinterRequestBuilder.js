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
exports.FiscalPrinterRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var FiscalPrinter_1 = require("./FiscalPrinter");
/**
 * Request builder class for operations supported on the [[FiscalPrinter]] entity.
 */
var FiscalPrinterRequestBuilder = /** @class */ (function (_super) {
    __extends(FiscalPrinterRequestBuilder, _super);
    function FiscalPrinterRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FiscalPrinter` entity based on its keys.
     * @param equipmentNo Key property. See [[FiscalPrinter.equipmentNo]].
     * @returns A request builder for creating requests to retrieve one `FiscalPrinter` entity based on its keys.
     */
    FiscalPrinterRequestBuilder.prototype.getByKey = function (equipmentNo) {
        return new v4_1.GetByKeyRequestBuilder(FiscalPrinter_1.FiscalPrinter, { EquipmentNo: equipmentNo });
    };
    /**
     * Returns a request builder for querying all `FiscalPrinter` entities.
     * @returns A request builder for creating requests to retrieve all `FiscalPrinter` entities.
     */
    FiscalPrinterRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(FiscalPrinter_1.FiscalPrinter);
    };
    /**
     * Returns a request builder for creating a `FiscalPrinter` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FiscalPrinter`.
     */
    FiscalPrinterRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(FiscalPrinter_1.FiscalPrinter, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FiscalPrinter`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FiscalPrinter`.
     */
    FiscalPrinterRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(FiscalPrinter_1.FiscalPrinter, entity);
    };
    FiscalPrinterRequestBuilder.prototype.delete = function (equipmentNoOrEntity) {
        return new v4_1.DeleteRequestBuilder(FiscalPrinter_1.FiscalPrinter, equipmentNoOrEntity instanceof FiscalPrinter_1.FiscalPrinter ? equipmentNoOrEntity : { EquipmentNo: equipmentNoOrEntity });
    };
    return FiscalPrinterRequestBuilder;
}(v4_1.RequestBuilder));
exports.FiscalPrinterRequestBuilder = FiscalPrinterRequestBuilder;
//# sourceMappingURL=FiscalPrinterRequestBuilder.js.map