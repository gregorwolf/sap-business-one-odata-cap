/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class BpIntrastatExtensionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace BpIntrastatExtension {
  export function build(json: { [keys: string]: FieldType }): BpIntrastatExtension {
    return createComplexType(json, {
      CardCode: (cardCode: string) => ({ cardCode: edmToTs(cardCode, 'Edm.String') }),
      TransportMode: (transportMode: number) => ({ transportMode: edmToTs(transportMode, 'Edm.Int32') }),
      Incoterms: (incoterms: number) => ({ incoterms: edmToTs(incoterms, 'Edm.Int32') }),
      NatureOfTransactions: (natureOfTransactions: number) => ({ natureOfTransactions: edmToTs(natureOfTransactions, 'Edm.Int32') }),
      StatisticalProcedure: (statisticalProcedure: number) => ({ statisticalProcedure: edmToTs(statisticalProcedure, 'Edm.Int32') }),
      CustomsProcedure: (customsProcedure: number) => ({ customsProcedure: edmToTs(customsProcedure, 'Edm.Int32') }),
      PortOfEntryOrExit: (portOfEntryOrExit: number) => ({ portOfEntryOrExit: edmToTs(portOfEntryOrExit, 'Edm.Int32') }),
      DomesticOrForeignID: (domesticOrForeignId: string) => ({ domesticOrForeignId: edmToTs(domesticOrForeignId, 'Edm.String') })
    });
  }
}
