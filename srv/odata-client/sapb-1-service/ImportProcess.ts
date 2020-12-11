/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ImportProcessField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ImportProcess> {
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

  /**
   * Creates an instance of ImportProcessField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ImportProcess);
  }
}

export namespace ImportProcess {
  /**
   * Metadata information on all properties of the `ImportProcess` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ImportProcess>[] = [{
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ImportationDocumentTypeCode',
    name: 'importationDocumentTypeCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ImportationDocumentNumber',
    name: 'importationDocumentNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DateOfRegistry_DI_DSI_DA',
    name: 'dateOfRegistryDiDsiDa',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CustomsClearanceDate',
    name: 'customsClearanceDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DrawbackRegimeConcessionAccountNumber',
    name: 'drawbackRegimeConcessionAccountNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AdditionalNumber',
    name: 'additionalNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AdditionalItemDiscountValue',
    name: 'additionalItemDiscountValue',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ImportProcess {
    return deserializeComplexTypeV4(json, ImportProcess);
  }
}
