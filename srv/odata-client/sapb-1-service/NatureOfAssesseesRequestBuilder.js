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
exports.NatureOfAssesseesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var NatureOfAssessees_1 = require("./NatureOfAssessees");
/**
 * Request builder class for operations supported on the [[NatureOfAssessees]] entity.
 */
var NatureOfAssesseesRequestBuilder = /** @class */ (function (_super) {
    __extends(NatureOfAssesseesRequestBuilder, _super);
    function NatureOfAssesseesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `NatureOfAssessees` entity based on its keys.
     * @param absEntry Key property. See [[NatureOfAssessees.absEntry]].
     * @returns A request builder for creating requests to retrieve one `NatureOfAssessees` entity based on its keys.
     */
    NatureOfAssesseesRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(NatureOfAssessees_1.NatureOfAssessees, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `NatureOfAssessees` entities.
     * @returns A request builder for creating requests to retrieve all `NatureOfAssessees` entities.
     */
    NatureOfAssesseesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(NatureOfAssessees_1.NatureOfAssessees);
    };
    /**
     * Returns a request builder for creating a `NatureOfAssessees` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `NatureOfAssessees`.
     */
    NatureOfAssesseesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(NatureOfAssessees_1.NatureOfAssessees, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `NatureOfAssessees`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `NatureOfAssessees`.
     */
    NatureOfAssesseesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(NatureOfAssessees_1.NatureOfAssessees, entity);
    };
    NatureOfAssesseesRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(NatureOfAssessees_1.NatureOfAssessees, absEntryOrEntity instanceof NatureOfAssessees_1.NatureOfAssessees ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return NatureOfAssesseesRequestBuilder;
}(core_1.RequestBuilder));
exports.NatureOfAssesseesRequestBuilder = NatureOfAssesseesRequestBuilder;
//# sourceMappingURL=NatureOfAssesseesRequestBuilder.js.map