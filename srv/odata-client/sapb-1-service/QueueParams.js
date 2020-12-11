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
exports.QueueParams = exports.QueueParamsField = exports.createQueueParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[QueueParams.build]] instead.
 */
function createQueueParams(json) {
    return QueueParams.build(json);
}
exports.createQueueParams = createQueueParams;
/**
 * QueueParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var QueueParamsField = /** @class */ (function (_super) {
    __extends(QueueParamsField, _super);
    /**
     * Creates an instance of QueueParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function QueueParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, QueueParams) || this;
        /**
         * Representation of the [[QueueParams.queueId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.queueId = new core_1.ComplexTypeStringPropertyField('QueueID', _this, 'Edm.String');
        return _this;
    }
    return QueueParamsField;
}(core_1.ComplexTypeField));
exports.QueueParamsField = QueueParamsField;
var QueueParams;
(function (QueueParams) {
    /**
     * Metadata information on all properties of the `QueueParams` complex type.
     */
    QueueParams._propertyMetadata = [{
            originalName: 'QueueID',
            name: 'queueId',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, QueueParams);
    }
    QueueParams.build = build;
})(QueueParams = exports.QueueParams || (exports.QueueParams = {}));
//# sourceMappingURL=QueueParams.js.map