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
exports.BoeInstructionsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var BoeInstructions_1 = require("./BoeInstructions");
/**
 * Request builder class for operations supported on the [[BoeInstructions]] entity.
 */
var BoeInstructionsRequestBuilder = /** @class */ (function (_super) {
    __extends(BoeInstructionsRequestBuilder, _super);
    function BoeInstructionsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BoeInstructions` entity based on its keys.
     * @param instructionEntry Key property. See [[BoeInstructions.instructionEntry]].
     * @returns A request builder for creating requests to retrieve one `BoeInstructions` entity based on its keys.
     */
    BoeInstructionsRequestBuilder.prototype.getByKey = function (instructionEntry) {
        return new v4_1.GetByKeyRequestBuilder(BoeInstructions_1.BoeInstructions, { InstructionEntry: instructionEntry });
    };
    /**
     * Returns a request builder for querying all `BoeInstructions` entities.
     * @returns A request builder for creating requests to retrieve all `BoeInstructions` entities.
     */
    BoeInstructionsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(BoeInstructions_1.BoeInstructions);
    };
    /**
     * Returns a request builder for creating a `BoeInstructions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BoeInstructions`.
     */
    BoeInstructionsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(BoeInstructions_1.BoeInstructions, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BoeInstructions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BoeInstructions`.
     */
    BoeInstructionsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(BoeInstructions_1.BoeInstructions, entity);
    };
    BoeInstructionsRequestBuilder.prototype.delete = function (instructionEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(BoeInstructions_1.BoeInstructions, instructionEntryOrEntity instanceof BoeInstructions_1.BoeInstructions ? instructionEntryOrEntity : { InstructionEntry: instructionEntryOrEntity });
    };
    return BoeInstructionsRequestBuilder;
}(v4_1.RequestBuilder));
exports.BoeInstructionsRequestBuilder = BoeInstructionsRequestBuilder;
//# sourceMappingURL=BoeInstructionsRequestBuilder.js.map