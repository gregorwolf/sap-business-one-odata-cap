import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EmailGroupParams
 */
export interface EmailGroupParams {
    /**
     * Email Group Code.
     * @nullable
     */
    emailGroupCode?: string;
    /**
     * Email Group Name.
     * @nullable
     */
    emailGroupName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmailGroupParams.build]] instead.
 */
export declare function createEmailGroupParams(json: any): EmailGroupParams;
/**
 * EmailGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmailGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmailGroupParams> {
    /**
     * Representation of the [[EmailGroupParams.emailGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    emailGroupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmailGroupParams.emailGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    emailGroupName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of EmailGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmailGroupParams {
    /**
     * Metadata information on all properties of the `EmailGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmailGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmailGroupParams;
}
//# sourceMappingURL=EmailGroupParams.d.ts.map