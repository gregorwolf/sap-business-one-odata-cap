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
exports.QueueParams = exports.QueueParamsField = exports.createQueueParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function QueueParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[QueueParams.queueId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.queueId = new v4_1.ComplexTypeStringPropertyField('QueueID', _this, 'Edm.String');
        return _this;
    }
    return QueueParamsField;
}(v4_1.ComplexTypeField));
exports.QueueParamsField = QueueParamsField;
var QueueParams;
(function (QueueParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            QueueID: function (queueId) { return ({ queueId: v4_1.edmToTs(queueId, 'Edm.String') }); }
        });
    }
    QueueParams.build = build;
})(QueueParams = exports.QueueParams || (exports.QueueParams = {}));
//# sourceMappingURL=QueueParams.js.map