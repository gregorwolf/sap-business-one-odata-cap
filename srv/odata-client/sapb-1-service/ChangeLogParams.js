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
exports.ChangeLogParams = exports.ChangeLogParamsField = exports.createChangeLogParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ChangeLogParams.build]] instead.
 */
function createChangeLogParams(json) {
    return ChangeLogParams.build(json);
}
exports.createChangeLogParams = createChangeLogParams;
/**
 * ChangeLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ChangeLogParamsField = /** @class */ (function (_super) {
    __extends(ChangeLogParamsField, _super);
    function ChangeLogParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ChangeLogParams.logInstance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logInstance = new v4_1.ComplexTypeNumberPropertyField('LogInstance', _this, 'Edm.Int32');
        /**
         * Representation of the [[ChangeLogParams.updatedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updatedDate = new v4_1.ComplexTypeDatePropertyField('UpdatedDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ChangeLogParams.userName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userName = new v4_1.ComplexTypeStringPropertyField('UserName', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeLogParams.objectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectCode = new v4_1.ComplexTypeStringPropertyField('ObjectCode', _this, 'Edm.String');
        return _this;
    }
    return ChangeLogParamsField;
}(v4_1.ComplexTypeField));
exports.ChangeLogParamsField = ChangeLogParamsField;
var ChangeLogParams;
(function (ChangeLogParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LogInstance: function (logInstance) { return ({ logInstance: v4_1.edmToTs(logInstance, 'Edm.Int32') }); },
            UpdatedDate: function (updatedDate) { return ({ updatedDate: v4_1.edmToTs(updatedDate, 'Edm.DateTimeOffset') }); },
            UserName: function (userName) { return ({ userName: v4_1.edmToTs(userName, 'Edm.String') }); },
            ObjectCode: function (objectCode) { return ({ objectCode: v4_1.edmToTs(objectCode, 'Edm.String') }); }
        });
    }
    ChangeLogParams.build = build;
})(ChangeLogParams = exports.ChangeLogParams || (exports.ChangeLogParams = {}));
//# sourceMappingURL=ChangeLogParams.js.map