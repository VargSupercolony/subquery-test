import {SubstrateEvent} from "@subql/types";
import {ContractEvent} from "../types";


export async function handleEvent(event: SubstrateEvent): Promise<void> {
    //Retrieve the record by its ID
    const record = await ContractEvent.get(event.extrinsic.block.block.header.hash.toString());
    record.id = event.extrinsic.block.block.header.hash.toString();
    record.eventJson = JSON.stringify(event.extrinsic.events.map((e) => e.event), null, 2)
    await record.save();
}


