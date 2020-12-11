import { Moment } from 'moment';
import { EcmActionStatusEnum } from './EcmActionStatusEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EcmActionStatusData
 */
export interface EcmActionStatusData {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Act Status.
     * @nullable
     */
    actStatus?: EcmActionStatusEnum;
    /**
     * Report Id.
     * @nullable
     */
    reportId?: string;
    /**
     * Receiv Date.
     * @nullable
     */
    receivDate?: Moment;
    /**
     * Act Message.
     * @nullable
     */
    actMessage?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EcmActionStatusData.build]] instead.
 */
export declare function createEcmActionStatusData(json: any): EcmActionStatusData;
/**
 * EcmActionStatusDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EcmActionStatusDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EcmActionStatusData> {
    /**
     * Representation of the [[EcmActionStatusData.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionStatusData.actStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionStatusData.reportId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionStatusData.receivDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    receivDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionStatusData.actMessage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actMessage: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of EcmActionStatusDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EcmActionStatusData {
    /**
     * Metadata information on all properties of the `EcmActionStatusData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EcmActionStatusData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EcmActionStatusData;
}
//# sourceMappingURL=EcmActionStatusData.d.ts.map