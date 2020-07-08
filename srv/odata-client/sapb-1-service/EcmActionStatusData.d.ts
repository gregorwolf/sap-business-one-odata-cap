import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class EcmActionStatusDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EcmActionStatusData.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
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
}
export declare namespace EcmActionStatusData {
    function build(json: {
        [keys: string]: FieldType;
    }): EcmActionStatusData;
}
//# sourceMappingURL=EcmActionStatusData.d.ts.map