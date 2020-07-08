/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createImportProcess(json: any): ImportProcess {
  return ImportProcess.build(json);
}

/**
 * ImportProcessField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ImportProcessField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ImportProcess.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ImportProcess.importationDocumentTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importationDocumentTypeCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ImportationDocumentTypeCode', this, 'Edm.String');
  /**
   * Representation of the [[ImportProcess.importationDocumentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importationDocumentNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ImportationDocumentNumber', this, 'Edm.String');
  /**
   * Representation of the [[ImportProcess.dateOfRegistryDiDsiDa]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateOfRegistryDiDsiDa: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateOfRegistry_DI_DSI_DA', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ImportProcess.customsClearanceDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsClearanceDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CustomsClearanceDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ImportProcess.drawbackRegimeConcessionAccountNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  drawbackRegimeConcessionAccountNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DrawbackRegimeConcessionAccountNumber', this, 'Edm.String');
  /**
   * Representation of the [[ImportProcess.additionalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AdditionalNumber', this, 'Edm.String');
  /**
   * Representation of the [[ImportProcess.additionalItemDiscountValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalItemDiscountValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalItemDiscountValue', this, 'Edm.Double');
}

export namespace ImportProcess {
  export function build(json: { [keys: string]: FieldType }): ImportProcess {
    return createComplexType(json, {
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      ImportationDocumentTypeCode: (importationDocumentTypeCode: string) => ({ importationDocumentTypeCode: edmToTs(importationDocumentTypeCode, 'Edm.String') }),
      ImportationDocumentNumber: (importationDocumentNumber: string) => ({ importationDocumentNumber: edmToTs(importationDocumentNumber, 'Edm.String') }),
      DateOfRegistry_DI_DSI_DA: (dateOfRegistryDiDsiDa: Moment) => ({ dateOfRegistryDiDsiDa: edmToTs(dateOfRegistryDiDsiDa, 'Edm.DateTimeOffset') }),
      CustomsClearanceDate: (customsClearanceDate: Moment) => ({ customsClearanceDate: edmToTs(customsClearanceDate, 'Edm.DateTimeOffset') }),
      DrawbackRegimeConcessionAccountNumber: (drawbackRegimeConcessionAccountNumber: string) => ({ drawbackRegimeConcessionAccountNumber: edmToTs(drawbackRegimeConcessionAccountNumber, 'Edm.String') }),
      AdditionalNumber: (additionalNumber: string) => ({ additionalNumber: edmToTs(additionalNumber, 'Edm.String') }),
      AdditionalItemDiscountValue: (additionalItemDiscountValue: number) => ({ additionalItemDiscountValue: edmToTs(additionalItemDiscountValue, 'Edm.Double') })
    });
  }
}
