import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ExportProcess
 */
export interface ExportProcess {
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Exportation Document Type Code.
     * @nullable
     */
    exportationDocumentTypeCode?: number;
    /**
     * Exportation Declaration Number.
     * @nullable
     */
    exportationDeclarationNumber?: number;
    /**
     * Exportation Declaration Date.
     * @nullable
     */
    exportationDeclarationDate?: Moment;
    /**
     * Exportation Nature Code.
     * @nullable
     */
    exportationNatureCode?: number;
    /**
     * Exportation Registry Number.
     * @nullable
     */
    exportationRegistryNumber?: number;
    /**
     * Exportation Registry Date.
     * @nullable
     */
    exportationRegistryDate?: Moment;
    /**
     * Lading Bill Number.
     * @nullable
     */
    ladingBillNumber?: string;
    /**
     * Lading Bill Date.
     * @nullable
     */
    ladingBillDate?: Moment;
    /**
     * Merchandise Left Customs Date.
     * @nullable
     */
    merchandiseLeftCustomsDate?: Moment;
    /**
     * Lading Bill Type Code.
     * @nullable
     */
    ladingBillTypeCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ExportProcess.build]] instead.
 */
export declare function createExportProcess(json: any): ExportProcess;
/**
 * ExportProcessField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExportProcessField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ExportProcess.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExportProcess.exportationDocumentTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportationDocumentTypeCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExportProcess.exportationDeclarationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportationDeclarationNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExportProcess.exportationDeclarationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportationDeclarationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExportProcess.exportationNatureCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportationNatureCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExportProcess.exportationRegistryNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportationRegistryNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExportProcess.exportationRegistryDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportationRegistryDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExportProcess.ladingBillNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ladingBillNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExportProcess.ladingBillDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ladingBillDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExportProcess.merchandiseLeftCustomsDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    merchandiseLeftCustomsDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExportProcess.ladingBillTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ladingBillTypeCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ExportProcess {
    function build(json: {
        [keys: string]: FieldType;
    }): ExportProcess;
}
//# sourceMappingURL=ExportProcess.d.ts.map