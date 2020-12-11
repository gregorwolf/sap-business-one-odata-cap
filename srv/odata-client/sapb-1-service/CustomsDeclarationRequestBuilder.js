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
exports.CustomsDeclarationRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustomsDeclaration_1 = require("./CustomsDeclaration");
/**
 * Request builder class for operations supported on the [[CustomsDeclaration]] entity.
 */
var CustomsDeclarationRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomsDeclarationRequestBuilder, _super);
    function CustomsDeclarationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomsDeclaration` entity based on its keys.
     * @param ccdNum Key property. See [[CustomsDeclaration.ccdNum]].
     * @returns A request builder for creating requests to retrieve one `CustomsDeclaration` entity based on its keys.
     */
    CustomsDeclarationRequestBuilder.prototype.getByKey = function (ccdNum) {
        return new core_1.GetByKeyRequestBuilderV4(CustomsDeclaration_1.CustomsDeclaration, { CCDNum: ccdNum });
    };
    /**
     * Returns a request builder for querying all `CustomsDeclaration` entities.
     * @returns A request builder for creating requests to retrieve all `CustomsDeclaration` entities.
     */
    CustomsDeclarationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(CustomsDeclaration_1.CustomsDeclaration);
    };
    /**
     * Returns a request builder for creating a `CustomsDeclaration` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomsDeclaration`.
     */
    CustomsDeclarationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(CustomsDeclaration_1.CustomsDeclaration, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomsDeclaration`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomsDeclaration`.
     */
    CustomsDeclarationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(CustomsDeclaration_1.CustomsDeclaration, entity);
    };
    CustomsDeclarationRequestBuilder.prototype.delete = function (ccdNumOrEntity) {
        return new core_1.DeleteRequestBuilderV4(CustomsDeclaration_1.CustomsDeclaration, ccdNumOrEntity instanceof CustomsDeclaration_1.CustomsDeclaration ? ccdNumOrEntity : { CCDNum: ccdNumOrEntity });
    };
    return CustomsDeclarationRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomsDeclarationRequestBuilder = CustomsDeclarationRequestBuilder;
//# sourceMappingURL=CustomsDeclarationRequestBuilder.js.map