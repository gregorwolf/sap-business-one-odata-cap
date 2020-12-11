import { ApprovalTemplateConditionTypeEnum } from './ApprovalTemplateConditionTypeEnum';
import { ApprovalTemplateOperationTypeEnum } from './ApprovalTemplateOperationTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ApprovalTemplateTerm
 */
export interface ApprovalTemplateTerm {
    /**
     * Condition Type.
     * @nullable
     */
    conditionType?: ApprovalTemplateConditionTypeEnum;
    /**
     * Operation Type.
     * @nullable
     */
    operationType?: ApprovalTemplateOperationTypeEnum;
    /**
     * Value.
     * @nullable
     */
    value?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateTerm.build]] instead.
 */
export declare function createApprovalTemplateTerm(json: any): ApprovalTemplateTerm;
/**
 * ApprovalTemplateTermField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalTemplateTermField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalTemplateTerm> {
    /**
     * Representation of the [[ApprovalTemplateTerm.conditionType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    conditionType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalTemplateTerm.operationType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    operationType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalTemplateTerm.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ApprovalTemplateTermField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ApprovalTemplateTerm {
    /**
     * Metadata information on all properties of the `ApprovalTemplateTerm` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ApprovalTemplateTerm>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalTemplateTerm;
}
//# sourceMappingURL=ApprovalTemplateTerm.d.ts.map