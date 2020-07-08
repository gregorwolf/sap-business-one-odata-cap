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
exports.AlternateCatNumRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var AlternateCatNum_1 = require("./AlternateCatNum");
/**
 * Request builder class for operations supported on the [[AlternateCatNum]] entity.
 */
var AlternateCatNumRequestBuilder = /** @class */ (function (_super) {
    __extends(AlternateCatNumRequestBuilder, _super);
    function AlternateCatNumRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AlternateCatNum` entity based on its keys.
     * @param itemCode Key property. See [[AlternateCatNum.itemCode]].
     * @param cardCode Key property. See [[AlternateCatNum.cardCode]].
     * @param substitute Key property. See [[AlternateCatNum.substitute]].
     * @returns A request builder for creating requests to retrieve one `AlternateCatNum` entity based on its keys.
     */
    AlternateCatNumRequestBuilder.prototype.getByKey = function (itemCode, cardCode, substitute) {
        return new v4_1.GetByKeyRequestBuilder(AlternateCatNum_1.AlternateCatNum, {
            ItemCode: itemCode,
            CardCode: cardCode,
            Substitute: substitute
        });
    };
    /**
     * Returns a request builder for querying all `AlternateCatNum` entities.
     * @returns A request builder for creating requests to retrieve all `AlternateCatNum` entities.
     */
    AlternateCatNumRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(AlternateCatNum_1.AlternateCatNum);
    };
    /**
     * Returns a request builder for creating a `AlternateCatNum` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AlternateCatNum`.
     */
    AlternateCatNumRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(AlternateCatNum_1.AlternateCatNum, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AlternateCatNum`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AlternateCatNum`.
     */
    AlternateCatNumRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(AlternateCatNum_1.AlternateCatNum, entity);
    };
    AlternateCatNumRequestBuilder.prototype.delete = function (itemCodeOrEntity, cardCode, substitute) {
        return new v4_1.DeleteRequestBuilder(AlternateCatNum_1.AlternateCatNum, itemCodeOrEntity instanceof AlternateCatNum_1.AlternateCatNum ? itemCodeOrEntity : {
            ItemCode: itemCodeOrEntity,
            CardCode: cardCode,
            Substitute: substitute
        });
    };
    return AlternateCatNumRequestBuilder;
}(v4_1.RequestBuilder));
exports.AlternateCatNumRequestBuilder = AlternateCatNumRequestBuilder;
//# sourceMappingURL=AlternateCatNumRequestBuilder.js.map