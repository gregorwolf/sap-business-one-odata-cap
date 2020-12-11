import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EmployeeAbsenceInfo
 */
export interface EmployeeAbsenceInfo {
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
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
     * Reason.
     * @nullable
     */
    reason?: string;
    /**
     * Approved By.
     * @nullable
     */
    approvedBy?: string;
    /**
     * Confirmer Number.
     * @nullable
     */
    confirmerNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeAbsenceInfo.build]] instead.
 */
export declare function createEmployeeAbsenceInfo(json: any): EmployeeAbsenceInfo;
/**
 * EmployeeAbsenceInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeAbsenceInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeAbsenceInfo> {
    /**
     * Representation of the [[EmployeeAbsenceInfo.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.fromDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.toDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    toDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.reason]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reason: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.approvedBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approvedBy: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.confirmerNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    confirmerNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of EmployeeAbsenceInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmployeeAbsenceInfo {
    /**
     * Metadata information on all properties of the `EmployeeAbsenceInfo` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmployeeAbsenceInfo>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeAbsenceInfo;
}
//# sourceMappingURL=EmployeeAbsenceInfo.d.ts.map