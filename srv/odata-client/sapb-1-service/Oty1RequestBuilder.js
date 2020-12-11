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
exports.Oty1RequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Oty1_1 = require("./Oty1");
/**
 * Request builder class for operations supported on the [[Oty1]] entity.
 */
var Oty1RequestBuilder = /** @class */ (function (_super) {
    __extends(Oty1RequestBuilder, _super);
    function Oty1RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Oty1` entity based on its keys.
     * @param code Key property. See [[Oty1.code]].
     * @returns A request builder for creating requests to retrieve one `Oty1` entity based on its keys.
     */
    Oty1RequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(Oty1_1.Oty1, { Code: code });
    };
    /**
     * Returns a request builder for querying all `Oty1` entities.
     * @returns A request builder for creating requests to retrieve all `Oty1` entities.
     */
    Oty1RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Oty1_1.Oty1);
    };
    /**
     * Returns a request builder for creating a `Oty1` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Oty1`.
     */
    Oty1RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Oty1_1.Oty1, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Oty1`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Oty1`.
     */
    Oty1RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Oty1_1.Oty1, entity);
    };
    Oty1RequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Oty1_1.Oty1, codeOrEntity instanceof Oty1_1.Oty1 ? codeOrEntity : { Code: codeOrEntity });
    };
    return Oty1RequestBuilder;
}(core_1.RequestBuilder));
exports.Oty1RequestBuilder = Oty1RequestBuilder;
//# sourceMappingURL=Oty1RequestBuilder.js.map