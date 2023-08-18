/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoDocumentTypes } from './BoDocumentTypes';
import { BoServiceSupplyMethods } from './BoServiceSupplyMethods';
import { BoServicePaymentMethods } from './BoServicePaymentMethods';
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
 * ItemIntrastatExtension
 */
export interface ItemIntrastatExtension<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Commodity Code.
   * @nullable
   */
  commodityCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Supplementary Unit.
   * @nullable
   */
  supplementaryUnit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Factor Of Supplementary Unit.
   * @nullable
   */
  factorOfSupplementaryUnit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Import Region State.
   * @nullable
   */
  importRegionState?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Export Region State.
   * @nullable
   */
  exportRegionState?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Import Nature Of Transaction.
   * @nullable
   */
  importNatureOfTransaction?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Export Nature Of Transaction.
   * @nullable
   */
  exportNatureOfTransaction?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Import Statistical Procedure.
   * @nullable
   */
  importStatisticalProcedure?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Export Statistical Procedure.
   * @nullable
   */
  exportStatisticalProcedure?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Country Of Origin.
   * @nullable
   */
  countryOfOrigin?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Service Code.
   * @nullable
   */
  serviceCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Service Supply Method.
   * @nullable
   */
  serviceSupplyMethod?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Service Payment Method.
   * @nullable
   */
  servicePaymentMethod?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Import Region Country.
   * @nullable
   */
  importRegionCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Export Region Country.
   * @nullable
   */
  exportRegionCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Use Weight In Calculation.
   * @nullable
   */
  useWeightInCalculation?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Intrastat Relevant.
   * @nullable
   */
  intrastatRelevant?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Statistical Code.
   * @nullable
   */
  statisticalCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ItemIntrastatExtensionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemIntrastatExtensionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ItemIntrastatExtension,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link ItemIntrastatExtension.commodityCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commodityCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CommodityCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemIntrastatExtension.supplementaryUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supplementaryUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SupplementaryUnit',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.factorOfSupplementaryUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factorOfSupplementaryUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FactorOfSupplementaryUnit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.importRegionState} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importRegionState: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ImportRegionState',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.exportRegionState} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportRegionState: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExportRegionState',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.importNatureOfTransaction} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importNatureOfTransaction: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ImportNatureOfTransaction',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.exportNatureOfTransaction} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportNatureOfTransaction: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExportNatureOfTransaction',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.importStatisticalProcedure} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importStatisticalProcedure: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ImportStatisticalProcedure',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.exportStatisticalProcedure} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportStatisticalProcedure: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExportStatisticalProcedure',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.countryOfOrigin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryOfOrigin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CountryOfOrigin',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.serviceCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ServiceCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemIntrastatExtension.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: EnumField<EntityT, DeSerializersT, BoDocumentTypes, true, false> =
    this._fieldBuilder.buildEnumField('Type', BoDocumentTypes, true);
  /**
   * Representation of the {@link ItemIntrastatExtension.serviceSupplyMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceSupplyMethod: EnumField<
    EntityT,
    DeSerializersT,
    BoServiceSupplyMethods,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ServiceSupplyMethod',
    BoServiceSupplyMethods,
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.servicePaymentMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  servicePaymentMethod: EnumField<
    EntityT,
    DeSerializersT,
    BoServicePaymentMethods,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ServicePaymentMethod',
    BoServicePaymentMethods,
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.importRegionCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importRegionCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ImportRegionCountry',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.exportRegionCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportRegionCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExportRegionCountry',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.useWeightInCalculation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useWeightInCalculation: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'UseWeightInCalculation',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ItemIntrastatExtension.intrastatRelevant} property for query construction.
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
   * Representation of the {@link ItemIntrastatExtension.statisticalCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statisticalCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StatisticalCode',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of ItemIntrastatExtensionField.
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
      ItemIntrastatExtension,
      fieldOptions
    );
  }
}

export namespace ItemIntrastatExtension {
  /**
   * Metadata information on all properties of the `ItemIntrastatExtension` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemIntrastatExtension>[] = [
    {
      originalName: 'ItemCode',
      name: 'itemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CommodityCode',
      name: 'commodityCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SupplementaryUnit',
      name: 'supplementaryUnit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FactorOfSupplementaryUnit',
      name: 'factorOfSupplementaryUnit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ImportRegionState',
      name: 'importRegionState',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExportRegionState',
      name: 'exportRegionState',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ImportNatureOfTransaction',
      name: 'importNatureOfTransaction',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExportNatureOfTransaction',
      name: 'exportNatureOfTransaction',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ImportStatisticalProcedure',
      name: 'importStatisticalProcedure',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExportStatisticalProcedure',
      name: 'exportStatisticalProcedure',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CountryOfOrigin',
      name: 'countryOfOrigin',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ServiceCode',
      name: 'serviceCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Type',
      name: 'type',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ServiceSupplyMethod',
      name: 'serviceSupplyMethod',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ServicePaymentMethod',
      name: 'servicePaymentMethod',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ImportRegionCountry',
      name: 'importRegionCountry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExportRegionCountry',
      name: 'exportRegionCountry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UseWeightInCalculation',
      name: 'useWeightInCalculation',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IntrastatRelevant',
      name: 'intrastatRelevant',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'StatisticalCode',
      name: 'statisticalCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
