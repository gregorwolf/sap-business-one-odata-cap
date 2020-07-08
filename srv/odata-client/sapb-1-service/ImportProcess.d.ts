import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ImportProcess
 */
export interface ImportProcess {
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Importation Document Type Code.
     * @nullable
     */
    importationDocumentTypeCode?: string;
    /**
     * Importation Document Number.
     * @nullable
     */
    importationDocumentNumber?: string;
    /**
     * Date Of Registry Di Dsi Da.
     * @nullable
     */
    dateOfRegistryDiDsiDa?: Moment;
    /**
     * Customs Clearance Date.
     * @nullable
     */
    customsClearanceDate?: Moment;
    /**
     * Drawback Regime Concession Account Number.
     * @nullable
     */
    drawbackRegimeConcessionAccountNumber?: string;
    /**
     * Additional Number.
     * @nullable
     */
    additionalNumber?: string;
    /**
     * Additional Item Discount Value.
     * @nullable
     */
    additionalItemDiscountValue?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ImportProcess.build]] instead.
 */
export declare function createImportProcess(json: any): ImportProcess;
/**
 * ImportProcessField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ImportProcessField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ImportProcess.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ImportProcess.importationDocumentTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    importationDocumentTypeCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ImportProcess.importationDocumentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    importationDocumentNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ImportProcess.dateOfRegistryDiDsiDa]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateOfRegistryDiDsiDa: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ImportProcess.customsClearanceDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsClearanceDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ImportProcess.drawbackRegimeConcessionAccountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    drawbackRegimeConcessionAccountNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ImportProcess.additionalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ImportProcess.additionalItemDiscountValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalItemDiscountValue: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ImportProcess {
    function build(json: {
        [keys: string]: FieldType;
    }): ImportProcess;
}
//# sourceMappingURL=ImportProcess.d.ts.map