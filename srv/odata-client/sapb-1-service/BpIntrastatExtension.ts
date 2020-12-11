/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BpIntrastatExtension
 */
export interface BpIntrastatExtension {
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Transport Mode.
   * @nullable
   */
  transportMode?: number;
  /**
   * Incoterms.
   * @nullable
   */
  incoterms?: number;
  /**
   * Nature Of Transactions.
   * @nullable
   */
  natureOfTransactions?: number;
  /**
   * Statistical Procedure.
   * @nullable
   */
  statisticalProcedure?: number;
  /**
   * Customs Procedure.
   * @nullable
   */
  customsProcedure?: number;
  /**
   * Port Of Entry Or Exit.
   * @nullable
   */
  portOfEntryOrExit?: number;
  /**
   * Domestic Or Foreign Id.
   * @nullable
   */
  domesticOrForeignId?: string;
  /**
   * Intrastat Relevant.
   * @nullable
   */
  intrastatRelevant?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[BpIntrastatExtension.build]] instead.
 */
export function createBpIntrastatExtension(json: any): BpIntrastatExtension {
  return BpIntrastatExtension.build(json);
}

/**
 * BpIntrastatExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpIntrastatExtensionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpIntrastatExtension> {
  /**
   * Representation of the [[BpIntrastatExtension.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
  /**
   * Representation of the [[BpIntrastatExtension.transportMode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transportMode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransportMode', this, 'Edm.Int32');
  /**
   * Representation of the [[BpIntrastatExtension.incoterms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incoterms: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Incoterms', this, 'Edm.Int32');
  /**
   * Representation of the [[BpIntrastatExtension.natureOfTransactions]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  natureOfTransactions: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NatureOfTransactions', this, 'Edm.Int32');
  /**
   * Representation of the [[BpIntrastatExtension.statisticalProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statisticalProcedure: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StatisticalProcedure', this, 'Edm.Int32');
  /**
   * Representation of the [[BpIntrastatExtension.customsProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsProcedure: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CustomsProcedure', this, 'Edm.Int32');
  /**
   * Representation of the [[BpIntrastatExtension.portOfEntryOrExit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portOfEntryOrExit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PortOfEntryOrExit', this, 'Edm.Int32');
  /**
   * Representation of the [[BpIntrastatExtension.domesticOrForeignId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  domesticOrForeignId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DomesticOrForeignID', this, 'Edm.String');
  /**
   * Representation of the [[BpIntrastatExtension.intrastatRelevant]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  intrastatRelevant: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IntrastatRelevant', this);

  /**
   * Creates an instance of BpIntrastatExtensionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BpIntrastatExtension);
  }
}

export namespace BpIntrastatExtension {
  /**
   * Metadata information on all properties of the `BpIntrastatExtension` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpIntrastatExtension>[] = [{
    originalName: 'CardCode',
    name: 'cardCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TransportMode',
    name: 'transportMode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Incoterms',
    name: 'incoterms',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'NatureOfTransactions',
    name: 'natureOfTransactions',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StatisticalProcedure',
    name: 'statisticalProcedure',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CustomsProcedure',
    name: 'customsProcedure',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PortOfEntryOrExit',
    name: 'portOfEntryOrExit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DomesticOrForeignID',
    name: 'domesticOrForeignId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'IntrastatRelevant',
    name: 'intrastatRelevant',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BpIntrastatExtension {
    return deserializeComplexTypeV4(json, BpIntrastatExtension);
  }
}
