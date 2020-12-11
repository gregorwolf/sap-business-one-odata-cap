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
exports.StatesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var States_1 = require("./States");
/**
 * Request builder class for operations supported on the [[States]] entity.
 */
var StatesRequestBuilder = /** @class */ (function (_super) {
    __extends(StatesRequestBuilder, _super);
    function StatesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `States` entity based on its keys.
     * @param code Key property. See [[States.code]].
     * @param country Key property. See [[States.country]].
     * @returns A request builder for creating requests to retrieve one `States` entity based on its keys.
     */
    StatesRequestBuilder.prototype.getByKey = function (code, country) {
        return new core_1.GetByKeyRequestBuilderV4(States_1.States, {
            Code: code,
            Country: country
        });
    };
    /**
     * Returns a request builder for querying all `States` entities.
     * @returns A request builder for creating requests to retrieve all `States` entities.
     */
    StatesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(States_1.States);
    };
    /**
     * Returns a request builder for creating a `States` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `States`.
     */
    StatesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(States_1.States, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `States`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `States`.
     */
    StatesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(States_1.States, entity);
    };
    StatesRequestBuilder.prototype.delete = function (codeOrEntity, country) {
        return new core_1.DeleteRequestBuilderV4(States_1.States, codeOrEntity instanceof States_1.States ? codeOrEntity : {
            Code: codeOrEntity,
            Country: country
        });
    };
    return StatesRequestBuilder;
}(core_1.RequestBuilder));
exports.StatesRequestBuilder = StatesRequestBuilder;
//# sourceMappingURL=StatesRequestBuilder.js.map