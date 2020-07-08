import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ReportTypeParams
 */
export interface ReportTypeParams {
    /**
     * Type Code.
     * @nullable
     */
    typeCode?: string;
    /**
     * Type Name.
     * @nullable
     */
    typeName?: string;
    /**
     * Addon Name.
     * @nullable
     */
    addonName?: string;
    /**
     * Addon Form Type.
     * @nullable
     */
    addonFormType?: string;
    /**
     * Menu Id.
     * @nullable
     */
    menuId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ReportTypeParams.build]] instead.
 */
export declare function createReportTypeParams(json: any): ReportTypeParams;
/**
 * ReportTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReportTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ReportTypeParams.typeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    typeCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportTypeParams.typeName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    typeName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportTypeParams.addonName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addonName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportTypeParams.addonFormType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addonFormType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportTypeParams.menuId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    menuId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ReportTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ReportTypeParams;
}
//# sourceMappingURL=ReportTypeParams.d.ts.map