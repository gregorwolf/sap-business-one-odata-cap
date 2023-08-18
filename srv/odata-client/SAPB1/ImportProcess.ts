/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * ImportProcess
 */
export interface ImportProcess<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Importation Document Type Code.
   * @nullable
   */
  importationDocumentTypeCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Importation Document Number.
   * @nullable
   */
  importationDocumentNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Date Of Registry Di Dsi Da.
   * @nullable
   */
  dateOfRegistryDiDsiDa?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Customs Clearance Date.
   * @nullable
   */
  customsClearanceDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Drawback Regime Concession Account Number.
   * @nullable
   */
  drawbackRegimeConcessionAccountNumber?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Additional Number.
   * @nullable
   */
  additionalNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Additional Item Discount Value.
   * @nullable
   */
  additionalItemDiscountValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Drawback Suspension Regime.
   * @nullable
   */
  drawbackSuspensionRegime?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Type Of Import.
   * @nullable
   */
  typeOfImport?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Additional Freight To Navy Authority.
   * @nullable
   */
  additionalFreightToNavyAuthority?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Additional Item Sequential Number.
   * @nullable
   */
  additionalItemSequentialNumber?: DeserializedType<
    DeSerializersT,
    'Edm.Int32'
  >;
}

/**
 * ImportProcessField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ImportProcessField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ImportProcess,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ImportProcess.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ImportProcess.importationDocumentTypeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importationDocumentTypeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ImportationDocumentTypeCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ImportProcess.importationDocumentNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importationDocumentNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ImportationDocumentNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ImportProcess.dateOfRegistryDiDsiDa} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateOfRegistryDiDsiDa: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DateOfRegistry_DI_DSI_DA',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ImportProcess.customsClearanceDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsClearanceDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomsClearanceDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ImportProcess.drawbackRegimeConcessionAccountNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  drawbackRegimeConcessionAccountNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DrawbackRegimeConcessionAccountNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ImportProcess.additionalNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ImportProcess.additionalItemDiscountValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalItemDiscountValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalItemDiscountValue',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ImportProcess.drawbackSuspensionRegime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  drawbackSuspensionRegime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DrawbackSuspensionRegime',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ImportProcess.typeOfImport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeOfImport: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TypeOfImport', 'Edm.String', true);
  /**
   * Representation of the {@link ImportProcess.additionalFreightToNavyAuthority} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalFreightToNavyAuthority: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalFreightToNavyAuthority',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ImportProcess.additionalItemSequentialNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalItemSequentialNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalItemSequentialNumber',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of ImportProcessField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ImportProcess, fieldOptions);
  }
}

export namespace ImportProcess {
  /**
   * Metadata information on all properties of the `ImportProcess` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ImportProcess>[] = [
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ImportationDocumentTypeCode',
      name: 'importationDocumentTypeCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ImportationDocumentNumber',
      name: 'importationDocumentNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DateOfRegistry_DI_DSI_DA',
      name: 'dateOfRegistryDiDsiDa',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CustomsClearanceDate',
      name: 'customsClearanceDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'DrawbackRegimeConcessionAccountNumber',
      name: 'drawbackRegimeConcessionAccountNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AdditionalNumber',
      name: 'additionalNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AdditionalItemDiscountValue',
      name: 'additionalItemDiscountValue',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DrawbackSuspensionRegime',
      name: 'drawbackSuspensionRegime',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TypeOfImport',
      name: 'typeOfImport',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AdditionalFreightToNavyAuthority',
      name: 'additionalFreightToNavyAuthority',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AdditionalItemSequentialNumber',
      name: 'additionalItemSequentialNumber',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
