/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BpBlockSendingMarketingContent
 */
export interface BpBlockSendingMarketingContent {
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Communication Media Id.
   * @nullable
   */
  communicationMediaId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BpBlockSendingMarketingContent.build]] instead.
 */
export function createBpBlockSendingMarketingContent(json: any): BpBlockSendingMarketingContent {
  return BpBlockSendingMarketingContent.build(json);
}

/**
 * BpBlockSendingMarketingContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpBlockSendingMarketingContentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BpBlockSendingMarketingContent.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
  /**
   * Representation of the [[BpBlockSendingMarketingContent.communicationMediaId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  communicationMediaId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CommunicationMediaId', this, 'Edm.Int32');
}

export namespace BpBlockSendingMarketingContent {
  export function build(json: { [keys: string]: FieldType }): BpBlockSendingMarketingContent {
    return createComplexType(json, {
      CardCode: (cardCode: string) => ({ cardCode: edmToTs(cardCode, 'Edm.String') }),
      CommunicationMediaId: (communicationMediaId: number) => ({ communicationMediaId: edmToTs(communicationMediaId, 'Edm.Int32') })
    });
  }
}
