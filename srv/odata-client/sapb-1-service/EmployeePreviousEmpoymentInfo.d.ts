import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeePreviousEmpoymentInfo
 */
export interface EmployeePreviousEmpoymentInfo {
    /**
     * Employee No.
     * @nullable
     */
    employeeNo?: number;
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * From Dtae.
     * @nullable
     */
    fromDtae?: Moment;
    /**
     * To Date.
     * @nullable
     */
    toDate?: Moment;
    /**
     * Employer.
     * @nullable
     */
    employer?: string;
    /**
     * Position.
     * @nullable
     */
    position?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeePreviousEmpoymentInfo.build]] instead.
 */
export declare function createEmployeePreviousEmpoymentInfo(json: any): EmployeePreviousEmpoymentInfo;
/**
 * EmployeePreviousEmpoymentInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeePreviousEmpoymentInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeePreviousEmpoymentInfo.employeeNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeePreviousEmpoymentInfo.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeePreviousEmpoymentInfo.fromDtae]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromDtae: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeePreviousEmpoymentInfo.toDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    toDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeePreviousEmpoymentInfo.employer]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employer: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeePreviousEmpoymentInfo.position]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    position: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeePreviousEmpoymentInfo.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EmployeePreviousEmpoymentInfo {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeePreviousEmpoymentInfo;
}
//# sourceMappingURL=EmployeePreviousEmpoymentInfo.d.ts.map