import { LegalDataLineTypeEnum } from './LegalDataLineTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * LegalDataDetail
 */
export interface LegalDataDetail {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Line Sequence.
     * @nullable
     */
    lineSequence?: number;
    /**
     * Line Type.
     * @nullable
     */
    lineType?: LegalDataLineTypeEnum;
    /**
     * Tax Code.
     * @nullable
     */
    taxCode?: string;
    /**
     * Tax Rate.
     * @nullable
     */
    taxRate?: number;
    /**
     * Amount.
     * @nullable
     */
    amount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[LegalDataDetail.build]] instead.
 */
export declare function createLegalDataDetail(json: any): LegalDataDetail;
/**
 * LegalDataDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LegalDataDetailField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LegalDataDetail> {
    /**
     * Representation of the [[LegalDataDetail.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataDetail.lineSequence]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineSequence: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataDetail.lineType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataDetail.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataDetail.taxRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataDetail.amount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of LegalDataDetailField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace LegalDataDetail {
    /**
     * Metadata information on all properties of the `LegalDataDetail` complex type.
     */
    const _propertyMetadata: PropertyMetadata<LegalDataDetail>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): LegalDataDetail;
}
//# sourceMappingURL=LegalDataDetail.d.ts.map