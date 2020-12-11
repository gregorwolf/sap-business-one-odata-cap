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
exports.DunningLettersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var DunningLetters_1 = require("./DunningLetters");
/**
 * Request builder class for operations supported on the [[DunningLetters]] entity.
 */
var DunningLettersRequestBuilder = /** @class */ (function (_super) {
    __extends(DunningLettersRequestBuilder, _super);
    function DunningLettersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DunningLetters` entity based on its keys.
     * @param rowNumber Key property. See [[DunningLetters.rowNumber]].
     * @returns A request builder for creating requests to retrieve one `DunningLetters` entity based on its keys.
     */
    DunningLettersRequestBuilder.prototype.getByKey = function (rowNumber) {
        return new core_1.GetByKeyRequestBuilderV4(DunningLetters_1.DunningLetters, { RowNumber: rowNumber });
    };
    /**
     * Returns a request builder for querying all `DunningLetters` entities.
     * @returns A request builder for creating requests to retrieve all `DunningLetters` entities.
     */
    DunningLettersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(DunningLetters_1.DunningLetters);
    };
    /**
     * Returns a request builder for creating a `DunningLetters` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DunningLetters`.
     */
    DunningLettersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(DunningLetters_1.DunningLetters, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DunningLetters`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DunningLetters`.
     */
    DunningLettersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(DunningLetters_1.DunningLetters, entity);
    };
    DunningLettersRequestBuilder.prototype.delete = function (rowNumberOrEntity) {
        return new core_1.DeleteRequestBuilderV4(DunningLetters_1.DunningLetters, rowNumberOrEntity instanceof DunningLetters_1.DunningLetters ? rowNumberOrEntity : { RowNumber: rowNumberOrEntity });
    };
    return DunningLettersRequestBuilder;
}(core_1.RequestBuilder));
exports.DunningLettersRequestBuilder = DunningLettersRequestBuilder;
//# sourceMappingURL=DunningLettersRequestBuilder.js.map