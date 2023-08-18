/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * BpIntrastatExtension
 */
export interface BpIntrastatExtension<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transport Mode.
   * @nullable
   */
  transportMode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Incoterms.
   * @nullable
   */
  incoterms?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Nature Of Transactions.
   * @nullable
   */
  natureOfTransactions?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Statistical Procedure.
   * @nullable
   */
  statisticalProcedure?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Customs Procedure.
   * @nullable
   */
  customsProcedure?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Port Of Entry Or Exit.
   * @nullable
   */
  portOfEntryOrExit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Domestic Or Foreign Id.
   * @nullable
   */
  domesticOrForeignId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Intrastat Relevant.
   * @nullable
   */
  intrastatRelevant?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * BpIntrastatExtensionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpIntrastatExtensionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BpIntrastatExtension,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BpIntrastatExtension.cardCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CardCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpIntrastatExtension.transportMode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transportMode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TransportMode', 'Edm.Int32', true);
  /**
   * Representation of the {@link BpIntrastatExtension.incoterms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incoterms: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Incoterms', 'Edm.Int32', true);
  /**
   * Representation of the {@link BpIntrastatExtension.natureOfTransactions} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  natureOfTransactions: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NatureOfTransactions',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BpIntrastatExtension.statisticalProcedure} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statisticalProcedure: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StatisticalProcedure',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BpIntrastatExtension.customsProcedure} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsProcedure: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomsProcedure',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BpIntrastatExtension.portOfEntryOrExit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portOfEntryOrExit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PortOfEntryOrExit',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BpIntrastatExtension.domesticOrForeignId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  domesticOrForeignId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DomesticOrForeignID',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BpIntrastatExtension.intrastatRelevant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  intrastatRelevant: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('IntrastatRelevant', BoYesNoEnum, true);

  /**
   * Creates an instance of BpIntrastatExtensionField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      BpIntrastatExtension,
      fieldOptions
    );
  }
}

export namespace BpIntrastatExtension {
  /**
   * Metadata information on all properties of the `BpIntrastatExtension` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpIntrastatExtension>[] = [
    {
      originalName: 'CardCode',
      name: 'cardCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TransportMode',
      name: 'transportMode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Incoterms',
      name: 'incoterms',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NatureOfTransactions',
      name: 'natureOfTransactions',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StatisticalProcedure',
      name: 'statisticalProcedure',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CustomsProcedure',
      name: 'customsProcedure',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PortOfEntryOrExit',
      name: 'portOfEntryOrExit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DomesticOrForeignID',
      name: 'domesticOrForeignId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IntrastatRelevant',
      name: 'intrastatRelevant',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
