import { Moment } from 'moment';
import { PmDocumentTypeEnum } from './PmDocumentTypeEnum';
import { LineStatusTypeEnum } from './LineStatusTypeEnum';
import { AmountCatTypeEnum } from './AmountCatTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmDocumentData
 */
export interface PmDocumentData {
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Stage Id.
     * @nullable
     */
    stageId?: number;
    /**
     * Doc Type.
     * @nullable
     */
    docType?: PmDocumentTypeEnum;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Doc Date.
     * @nullable
     */
    docDate?: Moment;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Status.
     * @nullable
     */
    status?: LineStatusTypeEnum;
    /**
     * Amount Category.
     * @nullable
     */
    amountCategory?: AmountCatTypeEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[PmDocumentData.build]] instead.
 */
export declare function createPmDocumentData(json: any): PmDocumentData;
/**
 * PmDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmDocumentDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmDocumentData> {
    /**
     * Representation of the [[PmDocumentData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.docType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.docDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.amountCategory]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountCategory: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of PmDocumentDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmDocumentData {
    /**
     * Metadata information on all properties of the `PmDocumentData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmDocumentData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmDocumentData;
}
//# sourceMappingURL=PmDocumentData.d.ts.map