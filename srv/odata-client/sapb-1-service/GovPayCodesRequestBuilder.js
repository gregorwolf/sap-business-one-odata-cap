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
exports.GovPayCodesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var GovPayCodes_1 = require("./GovPayCodes");
/**
 * Request builder class for operations supported on the [[GovPayCodes]] entity.
 */
var GovPayCodesRequestBuilder = /** @class */ (function (_super) {
    __extends(GovPayCodesRequestBuilder, _super);
    function GovPayCodesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `GovPayCodes` entity based on its keys.
     * @param absId Key property. See [[GovPayCodes.absId]].
     * @returns A request builder for creating requests to retrieve one `GovPayCodes` entity based on its keys.
     */
    GovPayCodesRequestBuilder.prototype.getByKey = function (absId) {
        return new core_1.GetByKeyRequestBuilderV4(GovPayCodes_1.GovPayCodes, { AbsId: absId });
    };
    /**
     * Returns a request builder for querying all `GovPayCodes` entities.
     * @returns A request builder for creating requests to retrieve all `GovPayCodes` entities.
     */
    GovPayCodesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(GovPayCodes_1.GovPayCodes);
    };
    /**
     * Returns a request builder for creating a `GovPayCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `GovPayCodes`.
     */
    GovPayCodesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(GovPayCodes_1.GovPayCodes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `GovPayCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GovPayCodes`.
     */
    GovPayCodesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(GovPayCodes_1.GovPayCodes, entity);
    };
    GovPayCodesRequestBuilder.prototype.delete = function (absIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(GovPayCodes_1.GovPayCodes, absIdOrEntity instanceof GovPayCodes_1.GovPayCodes ? absIdOrEntity : { AbsId: absIdOrEntity });
    };
    return GovPayCodesRequestBuilder;
}(core_1.RequestBuilder));
exports.GovPayCodesRequestBuilder = GovPayCodesRequestBuilder;
//# sourceMappingURL=GovPayCodesRequestBuilder.js.map