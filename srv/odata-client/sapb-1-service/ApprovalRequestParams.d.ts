import { BoApprovalRequestStatusEnum } from './BoApprovalRequestStatusEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ApprovalRequestParams
 */
export interface ApprovalRequestParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Status.
     * @nullable
     */
    status?: BoApprovalRequestStatusEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestParams.build]] instead.
 */
export declare function createApprovalRequestParams(json: any): ApprovalRequestParams;
/**
 * ApprovalRequestParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalRequestParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalRequestParams> {
    /**
     * Representation of the [[ApprovalRequestParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestParams.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestParams.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ApprovalRequestParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ApprovalRequestParams {
    /**
     * Metadata information on all properties of the `ApprovalRequestParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ApprovalRequestParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalRequestParams;
}
//# sourceMappingURL=ApprovalRequestParams.d.ts.map