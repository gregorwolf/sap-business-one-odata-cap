import { Moment } from 'moment';
import { EmployeeTransferProcessingStatusEnum } from './EmployeeTransferProcessingStatusEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time } from '@sap-cloud-sdk/core';
/**
 * EmployeeTransferDetail
 */
export interface EmployeeTransferDetail {
    /**
     * Transfer Id.
     * @nullable
     */
    transferId?: number;
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
    /**
     * Transfered Date.
     * @nullable
     */
    transferedDate?: Moment;
    /**
     * Transfered Time.
     * @nullable
     */
    transferedTime?: Time;
    /**
     * Status.
     * @nullable
     */
    status?: EmployeeTransferProcessingStatusEnum;
    /**
     * Comment.
     * @nullable
     */
    comment?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeTransferDetail.build]] instead.
 */
export declare function createEmployeeTransferDetail(json: any): EmployeeTransferDetail;
/**
 * EmployeeTransferDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeTransferDetailField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeTransferDetail> {
    /**
     * Representation of the [[EmployeeTransferDetail.transferId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transferId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeTransferDetail.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeTransferDetail.transferedDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transferedDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeTransferDetail.transferedTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transferedTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeTransferDetail.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeTransferDetail.comment]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    comment: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of EmployeeTransferDetailField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmployeeTransferDetail {
    /**
     * Metadata information on all properties of the `EmployeeTransferDetail` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmployeeTransferDetail>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeTransferDetail;
}
//# sourceMappingURL=EmployeeTransferDetail.d.ts.map