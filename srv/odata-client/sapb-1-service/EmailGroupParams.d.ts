import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class EmailGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace EmailGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EmailGroupParams;
}
//# sourceMappingURL=EmailGroupParams.d.ts.map