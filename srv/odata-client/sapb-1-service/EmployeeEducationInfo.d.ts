import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeeEducationInfo
 */
export interface EmployeeEducationInfo {
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
     * From Date.
     * @nullable
     */
    fromDate?: Moment;
    /**
     * To Date.
     * @nullable
     */
    toDate?: Moment;
    /**
     * Education Type.
     * @nullable
     */
    educationType?: number;
    /**
     * Institute.
     * @nullable
     */
    institute?: string;
    /**
     * Major.
     * @nullable
     */
    major?: string;
    /**
     * Diploma.
     * @nullable
     */
    diploma?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeEducationInfo.build]] instead.
 */
export declare function createEmployeeEducationInfo(json: any): EmployeeEducationInfo;
/**
 * EmployeeEducationInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeEducationInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeeEducationInfo.employeeNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeEducationInfo.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeEducationInfo.fromDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeEducationInfo.toDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    toDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeEducationInfo.educationType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    educationType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeEducationInfo.institute]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    institute: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeEducationInfo.major]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    major: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeEducationInfo.diploma]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    diploma: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EmployeeEducationInfo {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeEducationInfo;
}
//# sourceMappingURL=EmployeeEducationInfo.d.ts.map