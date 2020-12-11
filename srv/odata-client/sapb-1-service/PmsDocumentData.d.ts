import { Moment } from 'moment';
import { PmDocumentTypeEnum } from './PmDocumentTypeEnum';
import { LineStatusTypeEnum } from './LineStatusTypeEnum';
import { AmountCatTypeEnum } from './AmountCatTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmsDocumentData
 */
export interface PmsDocumentData {
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
 * @deprecated Since v1.6.0. Use [[PmsDocumentData.build]] instead.
 */
export declare function createPmsDocumentData(json: any): PmsDocumentData;
/**
 * PmsDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmsDocumentDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmsDocumentData> {
    /**
     * Representation of the [[PmsDocumentData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.docType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.docDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.amountCategory]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountCategory: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of PmsDocumentDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmsDocumentData {
    /**
     * Metadata information on all properties of the `PmsDocumentData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmsDocumentData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmsDocumentData;
}
//# sourceMappingURL=PmsDocumentData.d.ts.map