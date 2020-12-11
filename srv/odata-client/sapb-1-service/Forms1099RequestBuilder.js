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
exports.Forms1099RequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Forms1099_1 = require("./Forms1099");
/**
 * Request builder class for operations supported on the [[Forms1099]] entity.
 */
var Forms1099RequestBuilder = /** @class */ (function (_super) {
    __extends(Forms1099RequestBuilder, _super);
    function Forms1099RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Forms1099` entity based on its keys.
     * @param formCode Key property. See [[Forms1099.formCode]].
     * @returns A request builder for creating requests to retrieve one `Forms1099` entity based on its keys.
     */
    Forms1099RequestBuilder.prototype.getByKey = function (formCode) {
        return new core_1.GetByKeyRequestBuilderV4(Forms1099_1.Forms1099, { FormCode: formCode });
    };
    /**
     * Returns a request builder for querying all `Forms1099` entities.
     * @returns A request builder for creating requests to retrieve all `Forms1099` entities.
     */
    Forms1099RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Forms1099_1.Forms1099);
    };
    /**
     * Returns a request builder for creating a `Forms1099` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Forms1099`.
     */
    Forms1099RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Forms1099_1.Forms1099, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Forms1099`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Forms1099`.
     */
    Forms1099RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Forms1099_1.Forms1099, entity);
    };
    Forms1099RequestBuilder.prototype.delete = function (formCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Forms1099_1.Forms1099, formCodeOrEntity instanceof Forms1099_1.Forms1099 ? formCodeOrEntity : { FormCode: formCodeOrEntity });
    };
    return Forms1099RequestBuilder;
}(core_1.RequestBuilder));
exports.Forms1099RequestBuilder = Forms1099RequestBuilder;
//# sourceMappingURL=Forms1099RequestBuilder.js.map